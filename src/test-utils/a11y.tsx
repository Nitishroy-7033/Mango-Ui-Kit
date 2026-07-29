import React from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations, type JestAxeConfigureOptions } from 'jest-axe';

expect.extend(toHaveNoViolations);

export async function testA11y(
  ui: React.ReactElement,
  options?: JestAxeConfigureOptions,
): Promise<RenderResult> {
  const container = render(ui);
  const results = await axe(container.container, options);
  expect(results).toHaveNoViolations();
  return container;
}
