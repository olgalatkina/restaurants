import { useReducer } from 'react';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: 0,
}

function reducer(state, { type, payload } = {}) {
  switch (type) {
    case 'SET_NAME' :
      return { ...state, name: payload }
    case 'SET_TEXT':
      return { ...state, text: payload }
    case 'SET_RATING':
      return { ...state, rating: payload }
    case 'RESET_FORM':
      return { ...DEFAULT_FORM_VALUE }
    default: state
  }
}

export const NewReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: 'RESET_FORM' })
  }

  return (
    <div>
      <h4>Please add your review</h4>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 420,
          gap: 8
        }}
      >
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={form.name}
          autoFocus
          onChange={(evt) => dispatch({
            type: 'SET_NAME',
            payload: evt.target.value
          })}
        />

        <label htmlFor="text">Tell us your impressions: </label>
        <textarea
          id="text"
          name="text"
          rows={4}
          cols={42}
          maxLength={300}
          value={form.text}
          onChange={(evt) => dispatch({
            type: 'SET_TEXT',
            payload: evt.target.value
          })}
        />

        <label htmlFor="rating">Rating: </label>
        <input
          id="rating"
          type="number"
          min='0'
          max='5'
          value={form.rating}
          onChange={(evt) => dispatch({
            type: 'SET_RATING',
            payload: Number(evt.target.value)
          })}
        />

        <button
          type='submit'
          disabled={form.rating === 0}
        >
          ADD REVIEW
        </button>
      </form>
    </div>
  )
}
