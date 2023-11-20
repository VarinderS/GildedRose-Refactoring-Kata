const { Item, Shop } = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  it("should update normal item quality and sellIn", () => {
    const items = [new Item("Normal Item", 5, 10)];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
  });

  it("should update aged brie quality and sellIn", () => {
    const items = [new Item("Aged Brie", 5, 10)];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(11);
  });

  it("should update backstage passes quality and sellIn", () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10),
    ];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(11);
  });

  it("should update backstage passes quality to 0 after concert", () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
    ];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("should not update sulfuras quality and sellIn", () => {
    const items = [new Item("Sulfuras, Hand of Ragnaros", 5, 80)];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(80);
  });

  xit("should update conjured item quality and sellIn", () => {
    const items = [new Item("Conjured", 5, 10)];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(8);
  });
});
