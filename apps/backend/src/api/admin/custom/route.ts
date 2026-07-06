import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

/**
 * @openapi
 * /admin/custom:
 *   get:
 *     summary: Get Custom Admin Data
 *     description: Returns a 200 status code indicating the custom admin route is working.
 *     tags:
 *       - Admin Custom
 *     responses:
 *       200:
 *         description: OK
 */
export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  res.sendStatus(200);
}
