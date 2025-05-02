import { Bow } from "./weaponTypes/Bow";
import { ChargeBlade } from "./weaponTypes/Chargeblade";
import { Gunlance } from "./weaponTypes/Gunlance";
import { HeavyBowgun } from "./weaponTypes/Heavybowgun";
import { HuntingHorn } from "./weaponTypes/Huntinghorn";
import { InsectGlaive } from "./weaponTypes/InsectGlaive";
import { LightBowgun } from "./weaponTypes/Lightbowgun";
import { SwitchAxe } from "./weaponTypes/Switchaxe";

export type WeaponKind =
    | 'bow'
    | 'charge-blade'
    | 'dual-blades'
    | 'great-sword'
    | 'gunlance'
    | 'hammer'
    | 'heavy-bowgun'
    | 'hunting-horn'
    | 'insect-glaive'
    | 'lance'
    | 'light-bowgun'
    | 'long-sword'
    | 'switch-axe'
    | 'sword-shield';

export interface BasicWeapon {
    kind:
    | 'dual-blades'
    | 'great-sword'
    | 'hammer'
    | 'lance'
    | 'long-sword'
    | 'sword-shield';
}

export type WeaponKindSubtype =
| Bow
| ChargeBlade
| Gunlance
| HeavyBowgun
| HuntingHorn
| InsectGlaive
| LightBowgun
| SwitchAxe
| BasicWeapon;