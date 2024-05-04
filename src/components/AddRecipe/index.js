import styled from 'styled-components';
import { utensils } from '../../utils/Data';
import { colors } from '../../utils/style/variables';
import { useState } from 'react';

const Grid2 = styled.div`
  grid-column: span 1;
`;
const FormContainer = styled.div`
  background-color: black;
  width: 70vw;
  margin: 0 auto;
  border-radius: 30px;
  padding: 30px 45px;
  margin-top: 50px;
  padding-bottom: 100px;
  position: relative;
`;
const FormTitle = styled.h1`
  font-size: clamp(20px, 4vw, 45px);
  margin-top: 0;
  color: ${colors.fourth};
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`;
const LabelContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  ${(props) =>
    props.$grid1 &&
    `
        grid-column: span 1;
    `}
  ${(props) =>
    props.$grid2 &&
    `
        grid-column: span 2;
    `}
`;
const Label = styled.label`
  color: white;
  font-weight: bold;
  font-size: clamp(20px, 2.5vw, 25px);
  padding-right: 20px;
  ${(props) =>
    props.$subtitle &&
    `
        font-size: clamp(15px, 2vw, 20px)`}
  ${(props) =>
    props.$grid1 &&
    `
        grid-column: span 1;
    `}
`;
const FormInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px dashed white;
  color: ${colors.tertiary};
  font-size: clamp(15px, 2vw, 20px);
  font-weight: 100;
  outline: none;
  padding-left: 10px;
  margin-right: 20px;
  width: 100%;
`;
const FormSelect = styled.select`
  background: none;
  color: white;
  font-size: clamp(15px, 2vw, 20px);
  margin-right: 20px;
`;
const FormOption = styled.option`
  color: red;
`;
const TimeContainer = styled.div`
  margin: 20px;
  width: 100%;
`;
const UtensilsContainer = styled.div`
  border: 1px solid white;
  padding: 10px;
  margin: 20px;
  width: 100%;
`;
const UtensilsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0;
  height: 100px;
  overflow: scroll;
`;
const UtensilsItem = styled.li`
  list-style-type: none;
  color: white;
  font-size: clamp(15px, 2vw, 20px);
`;
const IngredientsContainer = styled.div`
  margin: 20px;
`;
const IngredientsDiv = styled.div`
  border: 1px solid white;
  height: 100px;
  overflow: scroll;
`;
const IngredientsUl = styled.ul``;
const IngredientsLi = styled.li`
  list-style-type: number;
`;
const AddButton = styled.button`
  background-color: black;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
  &:active {
    background-color: ${colors.fourth};
  }
`;
const StepsContainer = styled.div`
  margin: 20px;
`;
const StepsDiv = styled.div`
  border: 1px solid white;
  height: 100px;
  overflow: scroll;
`;
const StepsList = styled.div`
  border: 1px solid white;
  height: 100px;
  overflow: scroll;
`;
const SubmitButton = styled.button`
  background-color: ${colors.fourth};
  color: white;
  font-size: clamp(10px, 2vw, 20px);
  font-weight: 800;
  padding: 15px 50px;
  margin-top: 20px;
  position: absolute;
  right: 60px;
  bottom: 35px;
  cursor: pointer;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(80%);
  }
`;

function handleStep(e) {
  e.preventDefault();
}

function AddRecipe() {
  const [ingredients, setIngredients] = useState([]);

  function handleIngredient(e) {
    e.preventDefault();

    let addIngredientName = document.getElementById('ingredient_name').value;
    const addIngredientQuantity = document.getElementById(
      'ingredient_quantity'
    ).value;
    const addIngredientUnit = document.getElementById('ingredient_unit').value;
    const newIngredient =
      addIngredientName + ' ' + addIngredientQuantity + ' ' + addIngredientUnit;
    if (!addIngredientName || !addIngredientQuantity) {
      return;
    } else {
      setIngredients([...ingredients, newIngredient]);
    }
    document.getElementById('ingredient_name').value = '';
    document.getElementById('ingredient_quantity').value = '';
    document.getElementById('ingredient_unit').value = 'unit';

    console.log(ingredients);

    return ingredients;
  }

  return (
    <FormContainer>
      <FormTitle>ADD RECIPE</FormTitle>
      <Form>
        <Grid2>
          <LabelContainer>
            <Label htmlFor="title">NOM</Label>
            <FormInput type="text" name="title" id="title"></FormInput>
          </LabelContainer>
        </Grid2>
        <LabelContainer>
          <Label htmlFor="type">TYPE</Label>
          <FormSelect name="type" id="type">
            <FormOption value="main">...</FormOption>
            <option value="main">Main</option>
            <option value="sweet">Sweet</option>
            <option value="basic">Basic</option>
            <option value="drink">Drink</option>
          </FormSelect>
        </LabelContainer>
        <LabelContainer>
          <Label htmlFor="people">NB&nbsp;PERSONNES</Label>
          <FormInput
            type="number"
            min="1"
            name="people"
            id="people"
          ></FormInput>
        </LabelContainer>
        <Grid2>
          <Label $grid1>TEMPS (min.)</Label>
          <TimeContainer>
            <LabelContainer>
              <Label $subtitle htmlFor="preparation">
                PRÉPARATION
              </Label>
              <FormInput
                type="number"
                min="1"
                name="preparation"
                id="preparation"
              ></FormInput>
              <Label $subtitle htmlFor="cooking_duration">
                CUISSON
              </Label>
              <FormInput
                type="number"
                min="1"
                name="cooking_duration"
                id="cooking_duration"
              ></FormInput>
            </LabelContainer>
          </TimeContainer>
        </Grid2>
        <LabelContainer></LabelContainer>
        <Grid2>
          <Label htmlFor="utensils">USTENSILES</Label>
        </Grid2>
        <Grid2>
          <LabelContainer>
            <UtensilsContainer>
              <UtensilsList>
                {Object.entries(utensils).map(([utensil, index]) => (
                  <UtensilsItem key={index}>
                    <label htmlFor={utensil}>{utensil}</label>
                    <input type="checkbox" name={utensil} id={utensil}></input>
                  </UtensilsItem>
                ))}
              </UtensilsList>
            </UtensilsContainer>
          </LabelContainer>
        </Grid2>
        <Grid2>
          <Label htmlFor="ingredients">INGRÉDIENTS</Label>
        </Grid2>
        <Grid2>
          <IngredientsContainer>
            <LabelContainer>
              <Label $subtitle htmlFor="ingredient_name">
                NOM
              </Label>
              <FormInput
                type="text"
                name="ingredient_name"
                id="ingredient_name"
              ></FormInput>
              <Label $subtitle htmlFor="ingredient_quantity">
                QTÉ
              </Label>
              <FormInput
                type="number"
                name="ingredient_quantity"
                id="ingredient_quantity"
                min="1"
              ></FormInput>
              <FormSelect name="ingredient-unit" id="ingredient_unit">
                <option value="unit">unité(s)</option>
                <option value="cl">centilitre(s)</option>
                <option value="ml">millilitre(s)</option>
                <option value="l">litre(s)</option>
                <option value="g">gramme(s)</option>
                <option value="kg">kg</option>
                <option value="cas">càs</option>
                <option value="cac">càc</option>
                <option value="pincee">pincées(s)</option>
              </FormSelect>
              <AddButton onClick={handleIngredient}>+</AddButton>
            </LabelContainer>
            <IngredientsDiv>
              <IngredientsUl>
                {ingredients.map((ingredient) => (
                  <IngredientsLi key={ingredient}>{ingredient}</IngredientsLi>
                ))}
              </IngredientsUl>
            </IngredientsDiv>
          </IngredientsContainer>
        </Grid2>
        <Grid2>
          <LabelContainer>
            <Label htmlFor="steps">STEPS</Label>
          </LabelContainer>
        </Grid2>
        <Grid2>
          <StepsContainer>
            <LabelContainer>
              <FormInput style={{ width: '95%' }} type="text"></FormInput>
              <AddButton onClick={handleStep}>+</AddButton>
            </LabelContainer>
            <StepsDiv></StepsDiv>
          </StepsContainer>
        </Grid2>
        <Grid2>
          <SubmitButton type="submit">CRÉER</SubmitButton>
        </Grid2>
      </Form>
    </FormContainer>
  );
}

export default AddRecipe;
