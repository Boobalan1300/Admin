import Grid from "@mui/material/Grid";
import CustomCard from "../Components/CustomCard";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Dashboard() {
  const headerCards = [
    {
      id: 1,
      title: "Total Revenue",
      value: "$24,586",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      title: "Active Orders",
      value: 156,
      icon: <ShoppingCartIcon />,
    },
    {
      id: 3,
      title: "Total Products",
      value: 1247,
      icon: <PeopleIcon />,
    },
    {
      id: 4,
      title: "Active Customers",
      value: 892,
      icon: <BarChartIcon />,
    },
  ];

  return (
    <div>
      <div style={{padding:"40px 0px"}}>
        <h1 style={{ color: "var(--color-secondary" }}> Dashboard Overview</h1>
        <p style={{color:"var(--color-grey)",fontSize:"16px"}}>Welcome back! Here's what's happening with your business today.</p>
      </div>
      <Grid container spacing={3}>
        {headerCards.map((card) => (
          <Grid size={{ xs: 12, md: 6, lg: 3 }} key={card.id}>
            <CustomCard
              title={card.title}
              icon={card.icon}
              value={card.value}
              style={{ alignItems: "flex-start" }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
