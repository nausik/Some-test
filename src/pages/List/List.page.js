import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {
  isMobile,
  isTablet,
} from 'react-device-detect';

import { loadItems } from '../../ducks/list.duck';
import ListItem from '../../components/ListItem/ListItem.component';
import Dialog from '../../components/Dialog/Dialog.component';
import { enableScroll, disableScroll } from '../../utils';

import './List.css';

const IndexPage = () => {
  const [filter, setFilter] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogId, setDialogId] = useState('');

  const items = useSelector(state => state.list.items.filter(
    item => item.name.toLowerCase().includes(filter.toLowerCase()),
  ));

  const isLoading = useSelector(state => state.list.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!items.length) {
      dispatch(loadItems());
    }
  }, []);

  if (isLoading) {
    return <h3>List is loading...</h3>;
  }

  const openItem = id => () => {
    if (!isMobile && !isTablet) {
      disableScroll();
      setDialogVisible(true);
      setDialogId(id);
    } else {
      dispatch(push(`/list/${id}`));
    }
  };

  const renderItems = () => {
    return items.map(item => (
      <div key={item.product_id} className="list-grid__item">
        <ListItem
          name={item.name}
          image={item.image}
          price={item.price}
          onClick={openItem(item.product_id)}
        />
      </div>
    ));
  };

  return (
    <div className="list">
      <h1 className="list__title">List:</h1>
      <div className="list__filter">
        <input
          type="text"
          placeholder="[Name] filter"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <div className="list__content">
        {
            items.length
              ? (
                <div className="list__grid list-grid">
                  {renderItems()}
                </div>
              )
              : <h3>No items</h3>
          }
      </div>

      <Dialog
        isVisible={dialogVisible}
        onClose={() => {
          setDialogVisible(false);
          enableScroll();
        }}
        id={dialogId}
      />
    </div>
  );
};

export default IndexPage;
