import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://media.istockphoto.com/id/1364105164/photo/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=eue6RZBrtAzBjhp2FvMvuRUGGL9BsRJK4DyKJXbLwiM="
          />
          <Avatar
            alt="Travis Howard"
            src="https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.jpg?b=1&s=612x612&w=0&k=20&c=wXXpEj5dzovDMIFJNZKEE2pNY073H7k7TEkzwNw0Cg0="
          />
          <Avatar
            alt="Cindy Baker"
            src="https://media.istockphoto.com/id/1369826066/photo/blue-female-cyber-with-neon-pink-meta-verse-loading-text-goggles-on-geometric-dark-background.jpg?b=1&s=612x612&w=0&k=20&c=v0_L8IVBBmV8V8xCHFFnPrDE-9saVDnkI2eJMoDLTSQ="
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Travis Howard"
            src="https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.jpg?b=1&s=612x612&w=0&k=20&c=wXXpEj5dzovDMIFJNZKEE2pNY073H7k7TEkzwNw0Cg0="
          />
          <Avatar
            alt="Cindy Baker"
            src="https://media.istockphoto.com/id/1369826066/photo/blue-female-cyber-with-neon-pink-meta-verse-loading-text-goggles-on-geometric-dark-background.jpg?b=1&s=612x612&w=0&k=20&c=v0_L8IVBBmV8V8xCHFFnPrDE-9saVDnkI2eJMoDLTSQ="
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              alt="Travis Howard"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Cindy Baker"
              src="https://media.istockphoto.com/id/1369826066/photo/blue-female-cyber-with-neon-pink-meta-verse-loading-text-goggles-on-geometric-dark-background.jpg?b=1&s=612x612&w=0&k=20&c=v0_L8IVBBmV8V8xCHFFnPrDE-9saVDnkI2eJMoDLTSQ="
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Trevor Henderson"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    variant="body2"
                    component="span"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://media.istockphoto.com/id/1364105164/photo/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=eue6RZBrtAzBjhp2FvMvuRUGGL9BsRJK4DyKJXbLwiM="
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Agnes Walker"
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
