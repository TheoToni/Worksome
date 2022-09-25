import React from "react";

function HomeMenu() {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="buttonPanel">
        {open && <button className="button_regular">Settings</button>}
      </div>
    </div>
  );
}

export default HomeMenu;
