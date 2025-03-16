import React from 'react';

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
}

// Example usage
export default function ExampleUsage() {
  return (
    <div className="p-4 space-y-4">
      {/* Basic Card */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">This is a basic card with header and content.</p>
        </CardContent>
      </Card>

      {/* Card without header */}
      <Card>
        <CardContent>
          <p className="text-gray-600">A simple card without a header.</p>
        </CardContent>
      </Card>

      {/* Card with custom styling */}
      <Card className="bg-blue-50">
        <CardHeader className="bg-blue-100">
          <CardTitle className="text-blue-800">Custom Styled Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-600">This card has custom background colors.</p>
        </CardContent>
      </Card>
    </div>
  );
}