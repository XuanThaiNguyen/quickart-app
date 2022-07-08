import DialogAndroid from 'react-native-dialogs';
import {ActionSheetIOS, Platform} from 'react-native';

export function showMenuOptions(data: any, onSelectItem: any) {
  const {
    title,
    items,
    // selectedId,
    cancelLabel,
  } = data;
  const newItems = items.map((e: any) => {
    return {...e, label: e.label.charAt(0).toUpperCase() + e.label.slice(1)};
  });
  if (Platform.OS === 'ios') {
    const cancelLabelIOS = cancelLabel || 'Cancel';
    const labels = newItems.map((e: any) => e.label);
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title,
        options: [...labels, cancelLabelIOS],
        destructiveButtonIndex: -1,
        cancelButtonIndex: newItems.length,
      },
      index => {
        if (index === newItems.length) {
          return;
        }
        onSelectItem(index);
      },
    );
  } else {
    DialogAndroid.showPicker(title, null, {
      items: newItems,
      // type: DialogAndroid.listRadio,
      // selectedId: selectedId,
      positiveText: null,
    }).then((result: any) => {
      const {action, selectedItem} = result;
      if (action === 'actionSelect') {
        const idx = selectedItem?.id
          ? newItems.findIndex((ele: any) => ele.id === selectedItem?.id)
          : newItems.findIndex((ele: any) => ele.name === selectedItem?.name);
        if (idx >= 0) {
          onSelectItem(idx);
        }
      }
    });
  }
}

export default {};
