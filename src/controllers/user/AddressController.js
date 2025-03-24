const addressService = require("../../services/user/addressService");

class AddressController {
  async create(req, res) {
    try {
      const addressData = req.body;
      const address = await addressService.create(addressData);
      return res.status(201).json(address);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async getAddressById(req, res) {
    try {
      const id = req.params;
      const address = await addressService.getAddressById(id);
      return res.status(200).json(address);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async getAddressByUserId(req, res) {
    try {
      const { userId } = req.params;
      const addresses = await addressService.getAddressByUserId(userId);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const addressData = req.body;
      const result = await addressService.update(id, addressData);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await addressService.delete(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async getAll(req, res) {
    try {
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AddressController();
