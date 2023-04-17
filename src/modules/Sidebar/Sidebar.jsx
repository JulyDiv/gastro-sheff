import React from "react";
import styles from "./Sidebar.module.sass";
import { SidebarItem } from "../../components/SidebarItem/SidebarItem";

export const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <SidebarItem
          span="Ккал"
          text="Ккал"
          liStyleName={`${styles.link_calories}`}
          linkActive={`${styles.link_calories_active}`}
        />
        <SidebarItem
          span="Рыба"
          linkStyle={`${styles.link_fish}`}
          linkActive={`${styles.link_fish_active}`}
        />
        <SidebarItem
          span="Овощи"
          linkStyle={`${styles.link_carrot}`}
          linkActive={`${styles.link_carrot_active}`}
        />
        <SidebarItem
          span="Вода"
          linkStyle={`${styles.link_bottle}`}
          linkActive={`${styles.link_bottle_active}`}
        />
        <SidebarItem
          span="Мясо"
          linkStyle={`${styles.link_meat}`}
          linkActive={`${styles.link_meat_active}`}
        />
        <SidebarItem
          span="Раз"
          linkStyle={`${styles.link_table}`}
          isSpan={true}
          linkActive={`${styles.link_table_active}`}
        />
      </ul>
    </nav>
  );
};
