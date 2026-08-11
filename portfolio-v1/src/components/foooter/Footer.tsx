import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 bg-muted/30">
      <div className="container px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <Link
            href="#home"
            className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Mohamed Outerbah
          </Link>
          <p className="text-xs text-muted-foreground mt-0.5">
            &copy; {currentYear} · Full-Stack Engineer · Open to full-time
            remote roles
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Mohamed-gp"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohamedouterbah"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:mohamedterba6@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
