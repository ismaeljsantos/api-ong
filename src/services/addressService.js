const addressRepository = require("../repositories/addressRepository");

class AddressService {
  async create(addressData) {
    const { userId, logradouro, numero, complemento, bairro, cidade, uf, cep } =
      addressData;

    if (
      !userId ||
      !logradouro ||
      !numero ||
      !bairro ||
      !cidade ||
      !uf ||
      !cep
    ) {
      throw new Error("Todos os campos são obrigatórios");
    }

    return await addressRepository.create(addressData);
  }
  async getAddressById(id) {
    const address = await addressRepository.findById(id);
    if (!address) {
      throw new Error("Endereço não encontrado");
    }
    return address;
  }
  async getAddressByUserId(userId) {
    const addresses = await addressRepository.findByUserId(userId);
    if (!addresses || addresses.length === 0) {
      throw new Error("Nenhum endereço encontrado para este usuário.");
    }
    return addresses;
  }
  async updateAddress(id, addressData) {
    const address = await addressRepository.findById(id);
    if (!address) {
      throw new Error("Endereço não encontrado");
    }
    await addressRepository.update(id, addressData);
    return { message: "Endereço atualizado com sucesso" };
  }
  async deleteAddress(id) {
    const address = await addressRepository.findById(id);
    if (!address) {
      throw new Error("Endereço não encontrado");
    }
    await addressRepository.delete(id);
    return { message: "Endereço deletado com sucesso" };
  }
}

module.exports = new AddressService();
