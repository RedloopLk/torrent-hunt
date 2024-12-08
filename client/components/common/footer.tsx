export function Footer() {
  return (
    <footer className="px-2">
      <div className="container flex h-14 items-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Torrent Hunt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
