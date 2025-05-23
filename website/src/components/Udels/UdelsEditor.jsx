import Loader from '@src/repl/components/Loader';
import { HorizontalPanel } from '@src/repl/components/panel/Panel';
import { Code } from '@src/repl/components/Code';
import BigPlayButton from '@src/repl/components/BigPlayButton';
import UserFacingErrorMessage from '@src/repl/components/UserFacingErrorMessage';

// type Props = {
//  context: replcontext,
// }

export default function UdelsEditor(Props) {
  const { context, ...editorProps } = Props;
  const { containerRef, editorRef, error, init, pending, started, handleTogglePlay } = context;

  return (
    <div className={'h-full flex w-full flex-col relative'} {...editorProps}>
      <Loader active={pending} />
      <BigPlayButton started={started} handleTogglePlay={handleTogglePlay} />
      <div className="grow flex relative overflow-hidden">
        <Code containerRef={containerRef} editorRef={editorRef} init={init} />
      </div>
      <UserFacingErrorMessage error={error} />
      <HorizontalPanel context={context} />
    </div>
  );
}
