import { WeaponCrafting } from "@/app/types/api/weapons/Weapon";
import MaterialsDisplay from "./MaterialsDisplay";

interface WeaponMaterialsDisplayProps {
  crafting: WeaponCrafting;
}

const WeaponMaterialsDisplay = ({ crafting }: WeaponMaterialsDisplayProps) => {
  return (
    <>
      {/* Crafting Section */}
      {crafting.craftable && crafting.craftingMaterials.length > 0 && (
        <MaterialsDisplay
          title="Crafting Materials Required:"
          materials={crafting.craftingMaterials}
          cost={crafting.craftingZennyCost}
        />
      )}

      {/* Upgrade Section */}
      {crafting.upgradeMaterials.length > 0 && (
        <MaterialsDisplay
          title="Upgrade Materials Required:"
          materials={crafting.upgradeMaterials}
          cost={crafting.upgradeZennyCost}
        />
      )}
    </>
  );
};

export default WeaponMaterialsDisplay;