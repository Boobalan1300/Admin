import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  Divider,
  Popper,
  Paper,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import type { ImagesIconsFilesProps } from "../../@Types/GeneralTypes";
import ICONS from "../../Components/Icons";

type SubChild = {
  id: number;
  name: string;
  path: string;
  icon: ImagesIconsFilesProps;
};

type HeaderData = {
  id: number;
  name: string;
  path: string;
  icon?: ImagesIconsFilesProps;
  subChild?: SubChild[];
};

const headerData: HeaderData[] = [
  { id: 1, name: "Dashboard", path: "/dashboard", icon: "dashboardWhite" },
  {
    id: 2,
    name: "Orders",
    path: "/orders",
    icon: "dashboardWhite",
    subChild: [
      {
        id: 1,
        name: "Pending",
        path: "/orders/pending",
        icon: "dashboardWhite",
      },
      {
        id: 2,
        name: "Delivered",
        path: "/orders/delivered",
        icon: "dashboardWhite",
      },
    ],
  },
  {
    id: 3,
    name: "Reports",
    path: "/reports",
    icon: "dashboardWhite",
    subChild: [
      { id: 1, name: "Sales", path: "/reports/sales", icon: "dashboardWhite" },
      {
        id: 2,
        name: "Traffic",
        path: "/reports/traffic",
        icon: "dashboardWhite",
      },
    ],
  },
  {
    id: 4,
    name: "Integrations",
    path: "/integrations",
    icon: "dashboardWhite",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openIds, setOpenIds] = useState<number[]>([]);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<SubChild[] | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const anchorRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (!collapsed) {
      setActiveSubMenu(null);
      setAnchorEl(null);
      setTooltipVisible(true);
    }
  }, [collapsed]);

  const handleToggle = (item: HeaderData) => {
    if (!collapsed && item.subChild) {
      setOpenIds((prev) =>
        prev.includes(item.id)
          ? prev.filter((i) => i !== item.id)
          : [...prev, item.id]
      );
    } else if (collapsed && item.subChild) {
      setAnchorEl(anchorRefs.current[item.id]);
      setActiveSubMenu(item.subChild);
      setTooltipVisible(false);
    } else {
      navigate(item.path);
      setActiveSubMenu(null);
      setAnchorEl(null);
      setTooltipVisible(true);
    }
  };

  const handleSubMenuClick = (path: string) => {
    navigate(path);
    setActiveSubMenu(null);
    setAnchorEl(null);
    setTooltipVisible(true);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? 60 : 295,
        "& .MuiDrawer-paper": {
          width: collapsed ? 60 : 295,
          boxSizing: "border-box",
          backgroundColor: "var(--color-primary)",
          color: "var(--color-text)",
        },
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          padding: "10px 20px",
        }}
      >
        {!collapsed && (
          <h3 style={{ color: "var(--color-text)", margin: 0 }}>My Café</h3>
        )}
        <IconButton
          onClick={() => {
            setCollapsed(!collapsed);
            if (!collapsed) setOpenIds([]);
          }}
          sx={{ color: "var(--color-text)" }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <Divider sx={{ borderColor: "var(--color-secondary)" }} />

      {/* Menu List */}
      <List>
        {headerData.map((item) => {
          const isActiveParent = location.pathname === item.path;
          return (
            <React.Fragment key={item.id}>
              <Tooltip
                title={collapsed && tooltipVisible ? item.name : ""}
                placement="right"
              >
                <ListItemButton
                  ref={(ref) => {
                    anchorRefs.current[item.id] = ref ?? null;
                  }}
                  onClick={() => handleToggle(item)}
                  sx={{
                    justifyContent: collapsed ? "center" : "flex-start",
                    color: "var(--color-text)",
                    backgroundColor:
                      !item.subChild && isActiveParent
                        ? "var(--color-secondary)"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: isActiveParent
                        ? "var(--color-secondary)"
                        : "transparent",
                    },
                  }}
                >
                  {item.icon && (
                    <ICONS
                      img={item.icon}
                      style={{ marginRight: collapsed ? "0" : "10px" }}
                    />
                  )}
                  {!collapsed && (
                    <ListItemText
                      primary={item.name}
                      sx={{ color: "var(--color-text)" }}
                    />
                  )}
                  {item.subChild &&
                    !collapsed &&
                    (openIds.includes(item.id) ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    ))}
                </ListItemButton>
              </Tooltip>

              {/* Inline submenu */}
              {item.subChild && !collapsed && (
                <Collapse
                  in={openIds.includes(item.id)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subChild.map((sub) => {
                      const isActiveSub = location.pathname === sub.path;
                      return (
                        <ListItemButton
                          key={sub.id}
                          sx={{
                            pl: 4,
                            color: "var(--color-text)",
                            backgroundColor: isActiveSub
                              ? "var(--color-secondary)"
                              : "transparent",
                            "&:hover": {
                              backgroundColor: isActiveSub
                                ? "var(--color-secondary)"
                                : "transparent",
                            },
                          }}
                          onClick={() => handleSubMenuClick(sub.path)}
                        >
                          {sub.icon && (
                            <ICONS
                              img={sub.icon}
                              style={{ marginRight: collapsed ? "0" : "10px" }}
                            />
                          )}
                          <ListItemText
                            primary={sub.name}
                            sx={{ color: "var(--color-text)" }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>

      {/* Popper submenu for collapsed sidebar */}
      {collapsed && activeSubMenu && anchorEl && (
        <ClickAwayListener
          onClickAway={() => {
            setActiveSubMenu(null);
            setAnchorEl(null);
            setTooltipVisible(true);
          }}
        >
          <Popper
            open={!!activeSubMenu}
            anchorEl={anchorEl}
            placement="right-start"
            style={{ zIndex: 1300 }}
          >
            <Paper
              elevation={3}
              sx={{
                bgcolor: "var(--color-primary)",
                color: "var(--color-text)",
              }}
            >
              <List>
                {activeSubMenu.map((sub) => {
                  const isActiveSub = location.pathname === sub.path;
                  return (
                    <ListItemButton
                      key={sub.id}
                      onClick={() => handleSubMenuClick(sub.path)}
                      sx={{
                        color: "var(--color-text)",
                        backgroundColor: isActiveSub
                          ? "var(--color-secondary)"
                          : "transparent",
                      }}
                    >
                      {sub.icon && (
                        <ICONS img={sub.icon} style={{ marginRight: "10px" }} />
                      )}
                      <ListItemText
                        primary={sub.name}
                        sx={{ color: "var(--color-text)" }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Paper>
          </Popper>
        </ClickAwayListener>
      )}
    </Drawer>
  );
}
