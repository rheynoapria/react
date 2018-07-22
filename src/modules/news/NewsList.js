// bikin static komponen nya
// panggil via api
// yang mau di tampilkan sumber berita
import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader,Header } from "semantic-ui-react";
import axios from "axios";

const key = "a3f035ec192a43fda7a4249800aa0a79";
const source = "https://newsapi.org/v2/top-headlines?country=id&apiKey=" + key;
const dariSemantic = "https://react.semantic-ui.com";

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(source)
      .then(result => {
        console.log(result, "ini sukses");
        this.setState({
          data: result.data.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message, "ini error");
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>

      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }

    return (
      <div>
      <Header as='h3' block>
        Top Headlines News From Indonesia
      </Header>
      <Card.Group>
        {data.map(articles => {
          return (
            <Card key={articles.id}>
            <Image src={articles.urlToImage} />
              <Card.Content>
                <Card.Header>{articles.title}</Card.Header>
                <Card.Meta>
                  <span className='date'>{articles.publishedAt}</span>
                </Card.Meta>
                <Card.Description>{articles.description}</Card.Description>
                </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      From {articles.source.name}
                    </a>
                  </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
      </div>

    );
  }
}

export default NewsList;
