import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

import {
  auth0Middleware,
  errorHandler,
  notFound,
  validateRequestSchema,
} from "./src/middlewares";

import { driveRoutes } from "./src/routes";
import Auth0ManagementService from "./src/services/auth0Management";

// Initialize express
const app = express();
const port = process.env.PORT || 5000;

// Security Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "code"],
  })
);
// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Logging
app.use(morgan("combined"));

// Body parsing
app.use(express.json()); // Body limit is 10kb
app.use(express.urlencoded({ extended: true }));

app.use("/api/drive", driveRoutes);

// Routes
app.get("/health", (req: Request, res: Response) => {
  Auth0ManagementService.getInstance().updateUserMetadata("auth0|674c7c524233d731ca6044a6", {
    hello: "hey",
  });
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Protected routes
app.get(
  "/api/protected",
  auth0Middleware,
  validateRequestSchema,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({
        message: "This is a protected endpoint",
        user: req.auth,
      });
    } catch (error) {
      next(error);
    }
  }
);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
const server = app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});

export default app;
