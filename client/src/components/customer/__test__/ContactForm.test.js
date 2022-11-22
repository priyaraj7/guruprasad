// Not working
// console.error
//       Error: Error: connect ECONNREFUSED 127.0.0.1:80
//           at Object.dispatchError (/Users/supriya/Desktop/final-project/client/node_modules/jsdom/lib/jsdom/living/xhr/xhr-utils.js:63:19)
//           at Request.<anonymous> (/Users/supriya/Desktop/final-project/client/node_modules/jsdom/lib/jsdom/living/xhr/XMLHttpRequest-impl.js:655:18)
//           at Request.emit (events.js:412:35)
//           at ClientRequest.<anonymous> (/Users/supriya/Desktop/final-project/client/node_modules/jsdom/lib/jsdom/living/helpers/http-request.js:121:14)
//           at ClientRequest.emit (events.js:400:28)
//           at Socket.socketErrorListener (_http_client.js:475:9)
//           at Socket.emit (events.js:400:28)
//           at emitErrorNT (internal/streams/destroy.js:106:8)
//           at emitErrorCloseNT (internal/streams/destroy.js:74:3)
//           at processTicksAndRejections (internal/process/task_queues.js:82:21) undefined

// TypeError: Network request failed
// at /Users/supriya/Desktop/final-project/client/node_modules/whatwg-fetch/dist/fetch.umd.js:535:18
// at Timeout.task [as _onTimeout] (/Users/supriya/Desktop/final-project/client/node_modules/jsdom/lib/jsdom/browser/Window.js:516:19)
// at listOnTimeout (internal/timers.js:557:17)
// at processTimers (internal/timers.js:500:7)

// at postUserMessage (src/api/menuListApi.js:29:13)

// //   23 |
// 24 |   await waitFor(() =>
// > 25 |     expect(onSubmit).toHaveBeenCalledWith({
//      |            ^
//   26 |       email: "john.dee@someemail.com",
//   27 |       name: "John",
//   28 |       message: "Some Message:Lorem ipsum dolor sit amet.",

//   at src/components/customer/__test__/ContactForm.test.js:25:12

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactForm from "../ContactForm";
import { useFormik } from "formik";

test("rendering and submitting a basic Formik form", async () => {
  const handleSubmit = jest.fn();

  render(<ContactForm onSubmit={handleSubmit} />);
  const user = userEvent.setup();

  await user.type(screen.getByLabelText(/Your Name/i), "John");

  await user.type(screen.getByLabelText(/Mail/i), "john.dee@someemail.com");
  await user.type(
    screen.getByLabelText(/Message/i),
    "Some Message:Lorem ipsum dolor sit amet."
  );

  await user.click(screen.getByRole("button", { name: /Send Message/i }));

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith({
      email: "john.dee@someemail.com",
      name: "John",
      message: "Some Message:Lorem ipsum dolor sit amet.",
    })
  );
});
