import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import { Button } from 'gatsby-theme-material-ui'
import { colors } from '../../utils'

const builder = imageUrlBuilder({
  projectId: 'j7t5zwvc',
  dataset: 'production',
})

function urlFor(source) {
  return builder.image(source)
}

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: '100%',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
  },
  media: {
    height: 200,
  },
  center: {
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
    color: colors.dark,
  },
})

const PostCard = ({ id, title, slug, excerpt, image }) => {
  const classes = useStyles()

  const withCharLimit = (text, limit) =>
    text
      .split(' ')
      .filter((word, i) => (i <= limit ? true : false))
      .join(' ')

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={urlFor(image).url()}
        title={title}
      />
      <CardContent>
        <Link to={`/blog/${slug.current}`}>
          <Typography align="center" gutterBottom variant="h6" component="h2">
            {withCharLimit(title, 8)}
          </Typography>
        </Link>
        <Typography
          align="center"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {withCharLimit(excerpt, 20)}
        </Typography>
      </CardContent>
      <CardActions className={classes.center}>
        <Button
          to={`/blog/${slug.current}`}
          size="medium"
          color="primary"
          variant="outlined"
          className={classes.button}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PostCard
