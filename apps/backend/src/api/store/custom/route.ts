import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

/**
 * @openapi
 * /store/custom:
 *   get:
 *     summary: Get Custom Store Data
 *     description: Returns a 200 status code indicating the custom store route is working.
 *     tags:
 *       - Store Custom
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
