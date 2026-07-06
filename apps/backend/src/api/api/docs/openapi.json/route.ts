import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import fs from "fs";
import path from "path";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const oasPath = path.join(process.cwd(), 'src/oas/combined.oas.json');
    
    if (!fs.existsSync(oasPath)) {
      return res.status(404).json({
        error: "OpenAPI specification not found. Please ensure you have run the 'pnpm run oas' command to generate it."
      });
    }

    const oasContent = fs.readFileSync(oasPath, 'utf8');
    const openapiSpecification = JSON.parse(oasContent);
    
    return res.json(openapiSpecification);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to parse the OpenAPI specification file."
    });
  }
};
