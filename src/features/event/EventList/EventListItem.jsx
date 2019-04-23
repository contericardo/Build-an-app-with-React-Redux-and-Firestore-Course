import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    //console.log("Item, Props", this.props);

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src={this.props.event.hostPhotoURL}
              />
              <Item.Content>
                <Item.Header as="a">
                  {"#"}
                  {this.props.event.id}
                  {": "}
                  {this.props.event.title}
                </Item.Header>
                <Item.Description>
                  Hosted by {this.props.event.hostedBy}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {this.props.event.date} |
            <Icon name="marker" /> {this.props.event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {this.props.event.attendees &&
              this.props.event.attendees.map(x => (
                <EventListAttendee key={x.id} attendee={x} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{this.props.event.description}</span>
          <Button
            onClick={this.props.onEventOpen}
            as="a"
            color="teal"
            floated="right"
            content="Editar"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
