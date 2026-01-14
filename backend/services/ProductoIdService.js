const ProductError = require("../Errors/ProductError");

class ServiceProductId {
  constructor(productoRepositoryId) {
    this.productoRepositoryId = productoRepositoryId;
  }

  async ProductoIdService(id_producto) {
    if (!id_producto) {
      throw new ProductError("ID de producto inválido");
    }

    const productoId = await this.productoRepositoryId.productoID(id_producto);

    if (!productoId) {
      throw new ProductError("Producto no encontrado");
    }
    return {
      ok: true,
      data: productoId
    };
  }
}

module.exports = ServiceProductId;
