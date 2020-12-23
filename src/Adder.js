import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Placeholder } from 'semantic-ui-react';
import { Feed, Icon } from 'semantic-ui-react';
import { Checkbox } from 'semantic-ui-react';
const Adder = (props) => {
    const incrementCount = props.incrementCount;
    const decrementCount = props.decrementCount;
    return (
        <div>
     <Checkbox toggle />
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <Header as='h4' inverted color='purple'>
        Purple
      </Header>
      <Button basic inverted color='violet'>
        Violet
      </Button>
      <Button size='huge'>Huge</Button>
      <Button negative>Negative Button</Button>
      <Button negative onClick={decrementCount}>
        -
      </Button>
      <Card>Some text in a card</Card>
      <Image src='/images/wireframe/image.png' size='small' />
      <Image src='/images/wireframe/image.png' fluid />
      <img src='/images/wireframe/image.png' class='ui fluid image' />
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <p>So it seems that things are working</p>
            <Placeholder>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Card.Content>
          <p>What is the point of this card?</p>``
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image rectangular />
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>
      )
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='/images/avatar/small/elliot.jpg' />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Elliot Fu</Feed.User> added you as a friend
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />4 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/images/avatar/small/helen.jpg' />
          <Feed.Content>
            <Feed.Summary>
              <a>Helen Troy</a> added <a>2 new illustrations</a>
              <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a>
                <img src='/images/wireframe/image.png' />
              </a>
              <a>
                <img src='/images/wireframe/image.png' />
              </a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />1 Like
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='/images/avatar/small/justen.jpg' />
          <Feed.Content>
            <Feed.Summary>
              <a>Justen Kitsune</a> added <a>2 new photos</a> of you
              <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a>
                <img src='/images/wireframe/image.png' />
              </a>
              <a>
                <img src='/images/wireframe/image.png' />
              </a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                41 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
      )
    </div>
  );
};

export default Adder;
