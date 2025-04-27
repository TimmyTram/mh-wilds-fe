import { Bow } from "./Bow";
import { ChargeBlade } from "./Chargeblade";
import { Gunlance } from "./Gunlance";
import { HeavyBowgun } from "./Heavybowgun";
import { HuntingHorn } from "./Huntinghorn";
import { InsectGlaive } from "./InsectGlaive";
import { LightBowgun } from "./Lightbowgun";
import { SwitchAxe } from "./Switchaxe";

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