export interface CalloutType {
  defaultTitle: string;
  bgClass: string;
  textClass: string;
  icon: string;
}

export const calloutTypes = {
  note: {
    defaultTitle: 'Note',
    bgClass: 'bg-callout-note-bg',
    textClass: 'text-[var(--color-callout-note-text)]',
    icon: 'ℹ️'
  },
  tip: {
    defaultTitle: 'Tip',
    bgClass: 'bg-callout-tip-bg',
    textClass: 'text-[var(--color-callout-tip-text)]',
    icon: '💡'
  },
  important: {
    defaultTitle: 'Important',
    bgClass: 'bg-callout-tip-bg',
    textClass: 'text-[var(--color-callout-tip-text)]',
    icon: '⚡'
  },
  warning: {
    defaultTitle: 'Warning',
    bgClass: 'bg-callout-warning-bg',
    textClass: 'text-[var(--color-callout-warning-text)]',
    icon: '⚠️'
  },
  danger: {
    defaultTitle: 'Danger',
    bgClass: 'bg-callout-danger-bg)]',
    textClass: 'text-[var(--color-callout-danger-text)]',
    icon: '🚨'
  },
  error: {
    defaultTitle: 'Error',
    bgClass: 'bg-[var(--color-callout-danger-bg)]',
    textClass: 'text-[var(--color-callout-danger-text)]',
    icon: '❌'
  },
  success: {
    defaultTitle: 'Success',
    bgClass: 'bg-[var(--color-callout-success-bg)]',
    textClass: 'text-[var(--color-callout-success-text)]',
    icon: '✅'
  },
  bug: {
    defaultTitle: 'Bug',
    bgClass: 'bg-[var(--color-callout-bug-bg)]',
    textClass: 'text-[var(--color-callout-bug-text)]',
    icon: '🐛'
  },
  summary: {
    defaultTitle: 'Summary',
    bgClass: 'bg-[var(--color-callout-abstract-bg)]',
    textClass: 'text-[var(--color-callout-abstract-text)]',
    icon: '📋'
  },
} as const;

export type CalloutTypeKey = keyof typeof calloutTypes;

export function getCalloutConfig(type: string): CalloutType {
  const normalizedType = type.toLowerCase() as CalloutTypeKey;
  return calloutTypes[normalizedType] || calloutTypes.note;
}
