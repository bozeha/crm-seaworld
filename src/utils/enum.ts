export enum E_Elements {
  SALT_WATER_FISHES = "saltWaterFishes",
  FRESH_WATER_FISHES = "freshWaterFishes",
  CORALS = "corals",
  PLATNS = "platns",
}

export enum E_ListsTypes {
  SALT_WATER_FISHES = "saltWaterFishes",
  USERS = "users",
  CONNECTIONS = "connections",
  USERS_INFO = "usersInfo",
  WATER_INDEX = "waterIndex",
  SALT_WATER_FISHES_HE = "saltWaterFishesHe",
  SALT_WATER_FISHES_EN = "saltWaterFishesEn",
}

export enum E_Screens {
  SALT_WATER_FISHES_LIST = "saltWaterFishesList",
  FRESH_WATER_FISHES_LIST = "freshWaterFishesList",
  SALT_WATER_FISH_CARD = "saltWaterFishCard",
  ADD_SALT_WATER_FISH = "addSaltWaterFish",
}

export enum E_Actions {
  ADD_ELEMENT = "addElements",
  UPDATE_ELEMENT = "updateElements",
  UPLOAD_IMAGE = "uploadImages",
}

export const E_ReefCompatibleEn = {
  0: "",
  1: "Yes",
  2: "Yes. Have been known to bother some small crustaceans though",
  3: "With caution",
  4: "With caution, they must remain well fed and will graze on diatoms, algae etc all day.",
  5: "With extreme caution.",
  6: "No",
  7: "No. Coral nippers.",
};

export const E_ReefCompatibleHe = {
  0: "",
  1: "כן",
  2: "כן, אבל מציק לסרטנים קטנים",
  3: "כן, אבל בזהירות",
  4: "כן, אבל בזהירות, צריכים להיות מוזנים היטיב כל היום",
  5: "כן, אבל בהרבה זהירות",
  6: "לא",
  7: "לא, חותך אלמוגים",
};

export const E_CareLevelEn = {
  0: "",
  1: "Very easy",
  2: "Easy",
  3: "Easy to moderate. ",
  4: "Medium",
  5: "Moderate to expert due to feeding habits",
  6: "Difficult due to their feeding requirements. ",
  7: "Some special requirements",
};
export const E_CareLevelHe = {
  0: "",
  1: "קל מאוד",
  2: "קל",
  3: "קל עד בינוני",
  4: "בינוני",
  5: "בינוני עד קשה, ידע בהרגלי אכילה של הדג",
  6: "קשה, ידע בדרישות האכלה של הדג",
  7: "ישנם דרישות מיוחדות לגידולו",
};

export const E_BeginnerCompatibleEn = {
  0: "",
  1: "Yes",
  2: "With Caution",
  3: "with caution, they need feeding several times each day.",
  4: "No",
  5: "No, specialist dietary requirements",
  6: "No, they need an established tank with lots of tankmates.",
};
export const E_BeginnerCompatibleHe = {
  0: "",
  1: "כן",
  2: "כן, בזהירות",
  3: "כן, בזהירות, דורשים האכלה מספר פעמים ביום",
  4: "לא",
  5: "לא, דרושה שמירה על דיאטה מיוחדת לדג",
  6: "לא, דג הדורש הרבה חברים לאקוריום",
};

export const E_proneToDiseaseEn = {
  0: "",
  1: "No, these are hardy fish",
  2: "No, these are hardy little fish",
  3: "No",
  4: "Yes, but less prone than other species of Tang. Ich (Ick) & HLLE (Head & Lateral Line Erosion)",
  5: "Yes, Ich (Ick) & HLLE (Head & Lateral Line Erosion)",
};
export const E_proneToDiseaseHe = {
  0: "",
  1: "לא, זה דג חזק",
  2: "לא, זה דג קטן וחזק",
  3: "לא",
  4: "כן אבל פחות רגיש מרוב הדגים. Ich (Ick) & HLLE (Head & Lateral Line Erosion)",
  5: "כן, Ich (Ick) & HLLE (Head & Lateral Line Erosion)",
};

export const E_PreferredTankLevelEn = {
  0: "",
  1: "All over",
  2: "Sandbed dweller",
  3: "Middle, close to rockscape.",
  4: "Middle",
  5: "Mid to upper region, but they appreciate additional hiding spaces",
  6: "Close to live rock and substrate",
};
export const E_PreferredTankLevelHe = {
  0: "",
  1: "בכל מקום",
  2: "שוכן על הקרקע",
  3: "אמצע האקוריום, קרוב לסלעים",
  4: "אמצע",
  5: "אזור אמצע עליון, אוהבים בנוסף איזורי מחבוא",
  6: "קרוב לאזור הסלעים ולקרקע",
};

export const E_PredatorTankCompatibleEn = {
  0: "",
  1: "Absolutely not",
  2: "No",
  3: "Once at a larger size",
  4: "Yes",
};
export const E_PredatorTankCompatibleHe = {
  0: "",
  1: "ממש לא",
  2: "לא",
  3: "ברגע שהדג גדול",
  4: "כן",
};

export const E_NumberToATtankEn = {
  0: "",
  1: "To be kept singularly. ",
  2: "Any suitable for your tanks bio-load",
  3: "Can be kept in mated pairs, hareems or alone. ",
  4: "Can be kept in shoals or singularly, but 3 seems to be the magic number.",
  5: "One to be kept per tank, you can keep a mated pair, but it is pot luck if you get a male and a female. Two males together will almost certainly kill each other",
  6: "To be kept singularly in smaller tanks, and groups of 6+ in larger tanks. ",
  7: "To be kept singularly or in a shoal with a ratio of one male to four females or juveniles",
  8: "Can sometimes be kept in pairs but should be added at the same time and tank should be large, other tank mates should not look similar to them or have the same purple colour as this may cause aggression.",
  9: "They can be kept in a harem if all introduced at the same time. They should not be kept with other, more aggressive Wrasses.  ",
  10: "To be kept singularly, without other Blennies, unless you have a very large set-up. ",
  11: "To be kept singularly, they do not tolerate other species of Angelfish.",
  12: "Can be kept singularly or in a shoal. ",
  13: "To be kept singularly in larger tanks it may be possible to house a similar fish, but you should expect some aggression towards fish of the same species or shape. ",
  14: "One to be kept per tank. They will fight with another member of the Blenny family that has a similar shaped body to them or the same colouring",
  15: "To be kept singularly. Can be kept with other Tangs with caution. Generally considered invertebrate and smaller inhabitants safe.",
  16: "To be kept in pairs or more. ",
  17: "To be kept singularly or as a mated pair. ",
  18: " This species can be kept singularly, in male/female pairs or a single male with a harem of females. ",
  19: "Can be kept in shoals or singularly",
  20: "To be kept singularly or in a pair, but with no other rabbitfish in the tank. ",
};
export const E_NumberToATtankHe = {
  0: "",
  1: "להחזיק פריט אחד באקוריום",
  2: "כל כמות, אפשר להעמיס באקורייום",
  3: "להחזיק זוגות או בודדים",
  4: "אפשר להחזיק כבודד או בלהקות, אבל הכי מומלץ להחזיק 3",
  5: "להחזיק אחד בטנק, אפשר להחזיק זוג אם זה זכר ונקבה, אבל אם זה שני זכרים כמטע בטוח שיהרוגו אחד את השני",
  6: "להחזיק אחד באקוריום קטן, באקורריום גדול ניתן להחזיק 6 פריטים ויותר",
  7: "להחזיק אחד או להקה של 4 נקבות / צעירים על כל זכר",
  8: "ניתן לפעמים להחזיק בזוג, אבל צריך לשים את הזוג ביחד והאקוריום צריך להיות גדול, בנוסף אסור ששאר הדגים יראו דומים או באותו צבע סגול כי זה עלול לגרום לאגרסיביות",
  9: "They can be kept in a harem if all introduced at the same time. They should not be kept with other, more aggressive Wrasses.  ",
  10: "להחזיק אחד באקוריום ללא עוד בולנים, אלה אם האקוריום ענק",
  11: "להחזיק אחד באקוריום, לא יכולים לסבול אנגלים נוספים",
  12: "ניתן להחזיק כבודד או כלהקה",
  13: "To be kept singularly in larger tanks it may be possible to house a similar fish, but you should expect some aggression towards fish of the same species or shape. ",
  14: "One to be kept per tank. They will fight with another member of the Blenny family that has a similar shaped body to them or the same colouring",
  15: "To be kept singularly. Can be kept with other Tangs with caution. Generally considered invertebrate and smaller inhabitants safe.",
  16: "להחזיק בזוגות או יותר",
  17: "להחזיק כבודד או כזוג של זכר ונקבה",
  18: "ניתן להחזיק כבודד , כזוג של זכר ונקבה או כזכר ומספר נקבות",
  19: "ניתן להחזיק כובדד או כלהקה",
  20: "להחזיק כבודד או כזוג, אך ללא דגי ארנב נוספים",
};
