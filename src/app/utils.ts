export const companyElements = [
  {
    label: 'Company',
    id: 'company',
    type: 'text',
    control: 'company',
    required: true,
  },
  {
    label: 'Address 1',
    id: 'address-1',
    type: 'text',
    control: 'address1',
    required: true,
  },
  {
    label: 'Address 2',
    id: 'address-2',
    type: 'text',
    control: 'address2',
    required: false,
  },
  {
    label: 'City',
    id: 'city',
    type: 'text',
    control: 'city',
    required: true,
  },
  {
    label: 'State',
    id: 'state',
    type: 'text',
    control: 'state',
    required: true,
  },
  {
    label: 'Zip Code',
    id: 'zip-code',
    type: 'text',
    control: 'zipCode',
    required: true,
    maxLength: 5,
  },
  {
    label: 'First Name',
    id: 'first-name',
    type: 'text',
    control: 'firstName',
    required: true,
  },
  {
    label: 'Last Name',
    id: 'last-name',
    type: 'text',
    control: 'lastName',
    required: true,
  },
  {
    label: 'Title',
    id: 'title',
    type: 'text',
    control: 'title',
    required: false,
  },
  {
    label: 'Email',
    id: 'email',
    type: 'text',
    control: 'email',
    required: true,
  },
  {
    label: 'Phone',
    id: 'phone',
    type: 'text',
    control: 'phone',
    required: false,
    maxLength: 10,
  },
];

export const signUpElements = [
  {
    label: 'Do you want to promote adult offers?',
    id: 'adult-offers',
    control: 'adultOffers',
  },
  {
    label: 'Have you previously been an Affiliate?',
    id: 'prev-affl',
    control: 'prevAffiliate',
  },
  {
    label: 'Do you have any experience with mobile-advertising?',
    id: 'mobile-ad',
    control: 'mobileAdvertising',
  },
  {
    label: 'Are you a media-buyer?',
    id: 'media-buyer',
    control: 'mediaBuyer',
  },
  {
    label: 'Would you like to stay informed about nay new offers?',
    id: 'stay-informed',
    control: 'stayInformed',
  },
];
