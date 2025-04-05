import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add route to serve the resume file
  app.get('/api/resume', (req, res) => {
    const resumePath = path.resolve(process.cwd(), 'attached_assets', 'Kundula_Venkata_Mouli_resume.pdf');
    res.sendFile(resumePath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
