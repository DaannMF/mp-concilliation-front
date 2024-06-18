const options: Intl.DateTimeFormatOptions = {
   year: 'numeric',
   month: 'long',
   day: 'numeric',
};

const formatDate = (value: string): string => {
   if (value == null) {
      return '';
   }

   return new Date(value).toLocaleTimeString('en-ES', options);
}

export default formatDate;