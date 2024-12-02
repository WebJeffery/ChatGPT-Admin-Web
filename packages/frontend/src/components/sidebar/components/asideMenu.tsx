

import { asideRoutes } from "@/routes/asideRoutes";
import { Menu } from "antd";
import styles from '@/styles/module/home.module.scss';
export function AsideMenu() {

  return (
    <div>
      <Menu
        className={styles['aside-menu']}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={asideRoutes}
      />
    </div>
  );
}