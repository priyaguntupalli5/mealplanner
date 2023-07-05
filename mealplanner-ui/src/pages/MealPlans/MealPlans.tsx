import { DeleteTwoTone, Search, ShoppingCart } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Collapse,
  FormGroup,
  FormControlLabel,
  Grid,
  IconButton,
  IconButtonProps,
  ImageList,
  ImageListItem,
  InputBase,
  Paper,
  styled,
  Typography,
  Button,
} from "@mui/material";
import { graphql } from "babel-plugin-relay/macro";
import React, { useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import { useNavigate } from "react-router";
import { MealPlanNode } from "../../state/types";
import { CreateMealPlan } from "./CreateMealPlan";
import { deleteMealPlan } from "./DeleteMealPlan";
import { MealPlansQuery } from "./__generated__/MealPlansQuery.graphql";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface MealPlanCardProps {
  mealplan: MealPlanNode;
  connection: string;
}

const mealPlansQuery = graphql`
  query MealPlansQuery {
    mealPlans(orderBy: [CREATED_AT_DESC], first: 1000)
      @connection(key: "connection_mealPlans") {
      __id
      edges {
        cursor
        node {
          id
          rowId
          nameEn
          descriptionEn
          person {
            fullName
          }
          tags
          mealPlanEntries {
            nodes {
              meal {
                id
                photoUrl
              }
            }
          }
        }
      }
    }
  }
`;

const getInitials = (name: string) => {
  let initials = "";
  let names: string[] = (name && name.length > 1 && name.split(" ")) || [
    "No",
    "Name",
  ];
  names.forEach((n) => {
    initials += n[0];
  });
  return initials;
};

const MealPlanCard = (props: MealPlanCardProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const mealplan = props.mealplan;
  const connection = props.connection;
  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Grid item xs="auto">
      <Card
        sx={{ maxWidth: 332 }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          navigate(`/mealplans/${mealplan.rowId}`);
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.cursor = "pointer";
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "green", width: "fit" }} aria-label="user">
              {getInitials(mealplan.person?.fullName || "")}
            </Avatar>
          }
          action={
            <div>
              <IconButton
                aria-label="shopping list"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("stopped propagation");
                  navigate(`/mealplans/${mealplan.rowId}/shopping-list`);
                }}
              >
                <ShoppingCart />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("meal plan id: ", typeof mealplan.rowId);
                  deleteMealPlan(connection, mealplan.rowId);
                }}
              >
                <DeleteTwoTone />
              </IconButton>
            </div>
          }
          title={mealplan.nameEn}
          subheader={mealplan.person?.fullName}
        />
        <ImageList sx={{ width: 350, height: 150 }} cols={3} rowHeight={164}>
          {mealplan.mealPlanEntries.nodes.map((meal) =>
            meal.meal?.photoUrl !== null ? (
              <ImageListItem key={meal.meal?.id}>
                <img
                  src={`${meal.meal?.photoUrl}`}
                  srcSet={`${meal.meal?.photoUrl}`}
                  alt={meal.meal?.photoUrl || "no image"}
                  loading="lazy"
                />
              </ImageListItem>
            ) : (
              <></>
            )
          )}
        </ImageList>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {mealplan.tags?.map((tag) => (
              <span>{tag} &nbsp;</span>
            ))}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              {" "}
              <div>{mealplan.descriptionEn}</div>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

interface tagFilterProps {
  tags: string[];
  setTags: Function;
}

const TagFilter = ({ tags, setTags }: tagFilterProps) => {
  const defaultTags = [
    "vegetarian",
    "vegan",
    "gluten-free",
    "keto",
    "paleo",
    "dairy-free",
    "eggs-free",
    "nuts-free",
  ];
  const filterIn = (tag: string, tags: string[]) => {
    return tags.filter((currentTag: string) => currentTag !== tag);
  };
  const filterOut = (tag: string, tags: string[]) => {
    return tags.concat([tag]);
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid
        container
        justifyContent="space-around"
        gap="2rem"
        width="85%"
        style={{ margin: "auto" }}
      >
        <FormGroup>
          <Grid
            container
            item
            margin=".5rem"
            justifyContent="space-evenly"
            width="100%"
            columns={{ md: 5 }}
          >
            <Grid item md={1}>
              {" "}
              <Button variant="contained" onClick={() => setTags(defaultTags)}>
                Check All
              </Button>
            </Grid>
            <Grid item md={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setTags(filterOut("vegetarian", tags))
                        : setTags(filterIn("vegetarian", tags));
                    }}
                    checked={tags.includes("vegetarian")}
                  />
                }
                label="vegetarian"
              />
            </Grid>
            <Grid item md={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setTags(filterOut("vegan", tags))
                        : setTags(filterIn("vegan", tags));
                    }}
                    checked={tags.includes("vegan")}
                  />
                }
                label="vegan"
              />
            </Grid>
            <Grid item md={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setTags(filterOut("gluten-free", tags))
                        : setTags(filterIn("gluten-free", tags));
                    }}
                    checked={tags.includes("gluten-free")}
                  />
                }
                label="gluten-free"
              />
            </Grid>
            <Grid item md={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setTags(filterOut("keto", tags))
                        : setTags(filterIn("keto", tags));
                    }}
                    checked={tags.includes("keto")}
                  />
                }
                label="keto"
              />
            </Grid>
            <Grid item md={1}>
              <Button variant="contained" onClick={() => setTags([""])}>
                Uncheck All
              </Button>
            </Grid>
            <Grid item md={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setTags(filterOut("paleo", tags))
                        : setTags(filterIn("paleo", tags));
                    }}
                    checked={tags.includes("paleo")}
                  />
                }
                label="paleo"
              />{" "}
            </Grid>
            <Grid item md={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setTags(filterOut("dairy-free", tags))
                        : setTags(filterIn("dairy-free", tags));
                    }}
                    checked={tags.includes("dairy-free")}
                  />
                }
                label="dairy-free"
              />{" "}
            </Grid>
            <Grid item md={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setTags(filterOut("eggs-free", tags))
                        : setTags(filterIn("eggs-free", tags));
                    }}
                    checked={tags.includes("eggs-free")}
                  />
                }
                label="eggs-free"
              />{" "}
            </Grid>
            <Grid item md={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setTags(filterOut("nuts-free", tags))
                        : setTags(filterIn("nuts-free", tags));
                    }}
                    checked={tags.includes("nuts-free")}
                  />
                }
                label="nuts-free"
              />{" "}
            </Grid>
          </Grid>
        </FormGroup>
      </Grid>
    </div>
  );
};

export const MealPlans = () => {
  const [searched, setSearched] = useState<string>("");
  const [tags, setTags] = useState<string[]>([
    "vegetarian",
    "vegan",
    "gluten-free",
    "keto",
    "paleo",
    "dairy-free",
    "eggs-free",
    "nuts-free",
  ]);
  const data = useLazyLoadQuery<MealPlansQuery>(
    mealPlansQuery,
    {},
    { fetchPolicy: "network-only" }
  );
  return (
    <div>
      <Grid
        container
        spacing={2}
        columns={2}
        justifyContent="right"
        gap="2rem"
        margin="1rem"
        width="95%"
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "75%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Meal plan"
            inputProps={{ "aria-label": "Search Meal Plan" }}
            onChange={(e) => {
              setSearched(e.target.value.toLowerCase());
            }}
          />
          <Search></Search>
        </Paper>
        {data.mealPlans ? (
          <CreateMealPlan connection={data.mealPlans?.__id} />
        ) : (
          <></>
        )}
      </Grid>
      {tags && <TagFilter tags={tags} setTags={setTags} />}

      {data.mealPlans ? (
        <Grid container spacing={2} margin="1rem" columns={4}>
          {data.mealPlans?.edges.map(({ node }) => {
            if (node.tags) {
              if (
                (node.tags !== null &&
                  node.tags.some((tag) => {
                    if (tag !== null) return tags.includes(tag);
                  })) ||
                node.tags.length === 0
              )
                if (node.nameEn.toLowerCase().includes(searched))
                  return (
                    <MealPlanCard
                      mealplan={node}
                      connection={data.mealPlans!.__id}
                    />
                  );
            }
          })}
        </Grid>
      ) : (
        "No mealplans"
      )}
    </div>
  );
};
