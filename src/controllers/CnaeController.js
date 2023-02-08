import Cnae from "../models/Cnae";

class CnaeController {
  async index(req, res) {
    try {
      const result = await Cnae.findAll({
        attributes: ["cna_uuid", "cna_name"],
        // where: { cna_name: "5" },
      });

      return res.json(result);
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}
export default new CnaeController();
