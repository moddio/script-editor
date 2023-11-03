## TODO
- [x] {
  &emsp;"function": "calculate",
  &emsp;"items": [
  &emsp;&emsp;{
      &emsp;&emsp;&emsp;"operator": "*"
  &emsp;&emsp;},
  &emsp;&emsp;some_number,
  &emsp;&emsp;-1
  &emsp;]
} should convert to -some_number not some_number * -1
- [x] add missing {function: 'calculate'} to +-*/
( some slots show [object object] it's bc this)
- [x] add button to change edit modal
- [ ] update the UI
- [ ] hanlde some_func() without parameters
- [ ] check the final return type for first auto Completion
- [ ] press tab to move to next input, shift+tab to move to prev input
- [ ] 「non-urgent」update grammar to handle entity.some_attrOrVar
- [ ] the saved value is different from what the user sees (it will only change the value if there is no error in parser, maybe need to add something to let users know)
- [ ] some suggestions' return type are wrong, e.g. thisEntity
- [ ] if users focus on input, don't trigger 'single-action focus mode'
