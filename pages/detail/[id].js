import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import { getPaxDetails, changePaxName } from "../../lib/api";
import { SubTitle, Text } from "../../styles/TextStyles";
import { Image, RowContainer } from "../../styles/LayoutStyles";
import { EditButton } from "../../styles/ButtonStyles";
import Modal from "../../components/Modal";
function Detail(props) {
  const [isModalVisible, setisModalVisible] = React.useState(false);
  const [name, setName] = React.useState(props.passanger.name);

  const handleNameChange = async () => {
    changePaxName(props.passanger._id, name)
      .then(() => {
        setisModalVisible(false);
        setName(name);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleCloseModal = () => {
    setName(props.passanger.name);
    setisModalVisible(false);
  };
  return (
    <Layout>
      <Head>
        <title>{props.passanger.name} Detail Page</title>
      </Head>
      <RowContainer>
        <div>
          <SubTitle fontbig>
            <Text>Name:</Text> {name}
            <EditButton onClick={() => setisModalVisible(true)}>
              <FontAwesomeIcon size="sm" icon={faEdit} />
            </EditButton>
          </SubTitle>
          <Text>Trips: {props.passanger.trips}</Text>
        </div>
        <div>
          <Image src={props.passanger.airline.logo} />
          <SubTitle center>Airline: {props.passanger.airline.name}</SubTitle>
        </div>
      </RowContainer>

      {isModalVisible && (
        <Modal
          handleChange={handleNameChange}
          setVisible={handleCloseModal}
          value={name}
          setValue={(e) => setName(e.target.value)}
        />
      )}
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const response = await getPaxDetails(ctx.params.id);

  return {
    props: {
      passanger: response.data,
    },
  };
};

export default Detail;
