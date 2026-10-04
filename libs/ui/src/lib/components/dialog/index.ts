import { Dialog as DialogPrimitive } from 'bits-ui';
import Root from './dialog.svelte';
import Content from './dialog-content.svelte';
import Title from './dialog-title.svelte';
import Description from './dialog-description.svelte';

const Trigger = DialogPrimitive.Trigger;
const Close = DialogPrimitive.Close;

export {
	Root,
	Content,
	Title,
	Description,
	Trigger,
	Close,
	Root as Dialog,
	Content as DialogContent,
	Title as DialogTitle,
	Description as DialogDescription,
	Trigger as DialogTrigger,
	Close as DialogClose
};
