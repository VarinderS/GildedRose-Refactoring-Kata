class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];

      // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
      if (currentItem.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      }

      switch (currentItem.name) {
        case "Aged Brie":
          this.handleAgedBrie(currentItem);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.handleBackstagePasses(currentItem);
          break;
        default:
          this.handleNormalItem(currentItem);
          break;
      }

      // Decrease sellIn and quality for all items except Sulfuras
      currentItem.sellIn--;

      // Ensure quality is within bounds
      currentItem.quality = Math.max(0, Math.min(50, currentItem.quality));
    }

    return this.items;
  }

  handleNormalItem(item) {
    const qualityDecrement = item.sellIn > 0 ? 1 : 2;
    item.quality -= qualityDecrement;
  }

  handleAgedBrie(item) {
    item.quality = Math.min(50, item.quality + (item.sellIn > 0 ? 1 : 2));
  }

  handleBackstagePasses(item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      item.quality += 3;
    } else if (item.sellIn <= 10) {
      item.quality += 2;
    } else {
      item.quality++;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
