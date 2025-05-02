import { Weapon } from "@/app/types/api/weapons/Weapon";
import { Bow } from "@/app/types/api/weapons/weaponTypes/Bow";
import { ChargeBlade } from "@/app/types/api/weapons/weaponTypes/Chargeblade";
import { Gunlance } from "@/app/types/api/weapons/weaponTypes/Gunlance";
import { HeavyBowgun } from "@/app/types/api/weapons/weaponTypes/Heavybowgun";
import { LightBowgun } from "@/app/types/api/weapons/weaponTypes/Lightbowgun";
import BowDisplay from "./Bow/BowDisplay";
import ChargeBladeDisplay from "./ChargeBlade/ChargeBladeDisplay";
import GunlanceDisplay from "./Gunlance/GunlanceDisplay";
import HeavyBowgunDisplay from "./Bowguns/HeavyBowgunDisplay";
import LightBowgunDisplay from "./Bowguns/LightBowgunDisplay";



interface WeaponSpecificDisplayProps {
    weapon: Weapon;
}

/**
 * Some weapons have specific information that must be displayed and differs on a per weapon basis.
 * E.g: 
 * Heavy Bowgun & Light Bowgun | Bow --> Ammo | Coatings
 * Charge Blade & Switchaxe --> Phials
 * Gunlance --> Shelling Type and level
 * Hunting Horn --> Melody, echo bubble, echo wave, etc.
 * Insect Glaive --> Kinsect Level
 */
const WeaponSpecificDisplay = ({ weapon }: WeaponSpecificDisplayProps) => {
    // we need some sort of function that looks at weapon.kind and then we know which fields to display
    switch (weapon.kind.toString()) {
        case "bow":
            return <BowDisplay bow={weapon as Bow} />;
        case "charge-blade":
            return <ChargeBladeDisplay chargeBlade={weapon as ChargeBlade} />;
        case "gunlance":
            return <GunlanceDisplay gunlance={weapon as Gunlance} />;
        case "heavy-bowgun":
            return <HeavyBowgunDisplay heavyBowgun={weapon as HeavyBowgun} />;
        case "hunting-horn":
            return <div>Hunting Horn</div>;
        case "insect-glaive":
            return <div>Insect Glaive</div>;
        case "light-bowgun":
            return <LightBowgunDisplay lightBowgun={weapon as LightBowgun} />;
        case "switch-axe":
            return <div>Switch Axe</div>;
        
            // Basic weapons (no special display)
        // These weapons are all the same, so we can just return null or a generic display    
        case "dual-blades":
        case "great-sword":
        case "hammer":
        case "lance":
        case "long-sword":
        case "sword-shield":
            return;
        
        // this should never happen, but just in case we have a default case
        default:
            console.log(`[ERROR]: Unknown weapon kind: ${weapon.kind}`);
            return <div>Unknown weapon kind</div>;
    }
}

export default WeaponSpecificDisplay;
