export const weapons = [
    "great-sword",
    "sword-shield",
    "dual-blades",
    "long-sword",
    "hammer",
    "hunting-horn",
    "lance",
    "gunlance",
    "switch-axe",
    "charge-blade",
    "insect-glaive",
    "bow",
    "light-bowgun",
    "heavy-bowgun",
];

// for sidebar
// key = resourceName, value = link
export const sidebarItems = new Map([
    ["Monsters", "/monsters"],
    ["Armor", "/armor"],
    ["Weapons", "/weapons"],
    ["Charms", "/charms"],
    ["Decorations", "/decorations"],
    ["Skills", "/skills"],
    ["Items", "/items"],
])

export const wikiText = `This wiki is a community-driven project aimed at providing a comprehensive
                  and up-to-date resource for all things related to Monster Hunter Wilds.
                  Whether you're a seasoned hunter or a newcomer, you'll find valuable information here.
                  To Get Started look at the Resources Sidebar on the left.`;


// for links to other resources
// key = resourceName, value = link
export const helpfulLinks = new Map([
    ["Event Schedule", "https://info.monsterhunter.com/wilds/event-quest/en-us/schedule"],
    ["Monster Hunter Wilds Endgame Build Compilation", "https://www.reddit.com/r/MonsterHunterMeta/comments/1jkaxo7/mhwilds_endgame_meta_builds_compilation/"],
]);