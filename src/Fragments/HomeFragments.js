import { Avatar, Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import BannerSlider from "../Components/BannerSlider";
import ProductView from "../Components/ProductView";
import HorizontalScroller from "../Components/HorizontalScroller";

export class HomeFragments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    return (
      <Container maxWidth="md" fixed>
        <AppBar position="static" color="white">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label={<CategoryTab />} />
            <Tab label={<CategoryTab />} />
            <Tab label={<CategoryTab />} />
            <Tab label={<CategoryTab />} />
            <Tab label={<CategoryTab />} />
            <Tab label={<CategoryTab />} />
            <Tab label={<CategoryTab />} />
            <Tab label={<CategoryTab />} />
          </Tabs>
        </AppBar>
        <BannerSlider Images={[{ image: "uguyg" }]} />
        <HorizontalScroller />
      </Container>
    );
  }
}

export default HomeFragments;

export const CategoryTab = () => {
  return (
    <Box>
      <Avatar
        alt="Remy Sharp"
        variant="square"
        src="/static/images/avatar/1.jpg"
      />
      <Typography variant="body2">Title</Typography>
    </Box>
  );
};
