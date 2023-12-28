
class ItemCategory {

  static General = new ItemCategory('general');
  static Berries = new ItemCategory('berries');
  static Candies = new ItemCategory('candies');
  static Ingredients = new ItemCategory('ingredients');
  static Medicine = new ItemCategory('medicine');
  static Pokeball = new ItemCategory('pokeball');
  static Hold = new ItemCategory('hold');
  static Battle = new ItemCategory('battle');
  static Machines = new ItemCategory('machines')
  static Key = new ItemCategory('key');

  #id;

  constructor(id) {
    this.#id = id;
  }

}

class Item {

  #id;
  #name;
  #category

}
