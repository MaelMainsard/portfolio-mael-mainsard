import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { US, FR, ID } from 'country-flag-icons/react/3x2'

export const LangPicker = () => {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = React.useState(language)
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([currentLanguage.toUpperCase()]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  function handleChangeLanguage (key) {
    setCurrentLanguage(key.toLowerCase());
    changeLanguage(key.toLowerCase());
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        onAction={(key) => handleChangeLanguage(key)}
      >
        <DropdownItem key="FR">
            <div className='flex flex-row justify-between'>
            Français
            <FR title="French flag" className="w-5"/>
            </div>
        </DropdownItem>
        <DropdownItem key="EN">
            <div className='flex flex-row justify-between'>
            English
            <US title="English flag" className="w-5"/>
            </div>
        </DropdownItem>
        <DropdownItem key="ID">
            <div className='flex flex-row justify-between'>
            Bahasa indonesia
            <ID title="Indonesian flag" className="w-5"/>
            </div>
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}
