import Modal from "./Modal";

const MealDetails = ({ meal, onHideMenu }) => {
  return (
    <Modal onCloseMenu={onHideMenu}>
      <h1>{meal.foodName}</h1>
      <p>{meal.description}</p>
      <button onClick={onHideMenu}>Close</button>
    </Modal>
  );
};

export default MealDetails;
