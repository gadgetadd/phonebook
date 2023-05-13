import PropTypes from 'prop-types';

import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Box,
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ListItem
      sx={{ pr: '96px' }}
      secondaryAction={
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <IconButton
            aria-label="edit"
            // disabled={isLoading}
            // onClick={() => deleteContact(id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            disabled={isLoading}
            onClick={() => deleteContact(id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      <ListItemButton href={`tel:${number}`}>
        <ListItemAvatar>
          <Avatar>
            <ContactPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${name}`} secondary={`${number}`} />
      </ListItemButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};