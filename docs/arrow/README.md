# Apache Arrow

[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/arrow.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:arrow)
[![License](http://img.shields.io/:license-Apache%202-blue.svg)](https://github.com/apache/arrow/blob/main/LICENSE.txt)
[![Twitter Follow](https://img.shields.io/twitter/follow/apachearrow.svg?style=social&label=Follow)](https://twitter.com/apachearrow)

_source: <https://github.com/apache/arrow/tree/main?tab=readme-ov-file#powering-in-memory-analytics>_

## Powering In-Memory Analytics

Apache Arrow is a development platform for in-memory analytics. It contains a
set of technologies that enable big data systems to process and move data fast.

### Major components of the project include:

- [The Arrow Columnar In-Memory Format](https://arrow.apache.org/docs/dev/format/Columnar.html):
a standard and efficient in-memory representation of various datatypes, plain or nested
- [The Arrow IPC Format](https://arrow.apache.org/docs/dev/format/Columnar.html#serialization-and-interprocess-communication-ipc):
an efficient serialization of the Arrow format and associated metadata,
for communication between processes and heterogeneous environments
- [The Arrow Flight RPC protocol](https://github.com/apache/arrow/tree/main/format/Flight.proto):
based on the Arrow IPC format, a building block for remote services exchanging
Arrow data with application-defined semantics (for example a storage server or a database)
- [C++ libraries](https://github.com/apache/arrow/tree/main/cpp)
- [C bindings using GLib](https://github.com/apache/arrow/tree/main/c_glib)
- [C# .NET libraries](https://github.com/apache/arrow/tree/main/csharp)
- [Gandiva](https://github.com/apache/arrow/tree/main/cpp/src/gandiva):
an [LLVM](https://llvm.org)-based Arrow expression compiler, part of the C++ codebase
- [Go libraries](https://github.com/apache/arrow/tree/main/go)
- [Java libraries](https://github.com/apache/arrow/tree/main/java)
- [JavaScript libraries](https://github.com/apache/arrow/tree/main/js)
- [Python libraries](https://github.com/apache/arrow/tree/main/python)
- [R libraries](https://github.com/apache/arrow/tree/main/r)
- [Ruby libraries](https://github.com/apache/arrow/tree/main/ruby)
- [Rust libraries](https://github.com/apache/arrow-rs)

Arrow is an [Apache Software Foundation](https://www.apache.org) project. Learn more at
[arrow.apache.org](https://arrow.apache.org).

https://github.com/apache/arrow

https://studygyaan.com/cheatsheet/arrow
https://arrow.apache.org/docs/developers/cpp/building.html?highlight=arrow_python
https://arrow.apache.org/install/
https://arrow.apache.org/docs/developers/cpp/building.html?highlight=arrow_python
https://arrow.apache.org/docs/developers/cpp/building.html
https://github.com/apache/arrow