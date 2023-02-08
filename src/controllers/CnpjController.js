import Cnpj from "../models/Cnpj";

class CnpjController {
  async index(req, res) {
    try {
      // const id = req.params.id;
      const { cna_name } = req.body;

      // const cna_name ="Suporte técnico, manutenção e outros serviços em tecnologia da informação";
      const query = `
      SELECT * FROM cnpj_json
      WHERE cj_data -> 'estabelecimento' -> 'atividade_principal' ->> 'descricao' = '${cna_name}'
      `;

      const data = await Cnpj.sequelize.query(query, {
        raw: true,
        model: Cnpj,
      });

      const result = data || [];

      // if (!cnae) {
      //   return res.status(404).json({ message: "Usuário não encontrado!" });
      // }

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ erro: error });
    }
  }
}
export default new CnpjController();
