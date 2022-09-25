import React from "react";
import { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState(false);
  return (
    <div className="settings">
      <h2>Settings</h2>
    </div>
  );
}

export default Settings;
