
export const saveFormData = (formData) => ({
  type: 'SAVE_FORM_DATA',
    payload: formData,
});

export const saveAdditionalFormData = (formData2) => ({
   type: 'SAVE_ADDITIONAL_FORM_DATA',
  payload: formData2,
});
